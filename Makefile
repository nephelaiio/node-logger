.PHONY: install lint eslint prettier format build dist package test

install:
	@npm ci 2>&1 >/dev/null

eslint: install
	@npx eslint . --ext .ts

prettier: install
	@npx prettier --check .

lint: eslint prettier

format: install
	@npx prettier --write .

build: install dist package

dist:
	npx ts-node ./esbuild.ts
	npx tsc --project tsconfig.json --emitDeclarationOnly

package:
	cp package.json dist/

test: install
	find test/ -name "*.txt" | \
	sort | \
	xargs -L 1 basename -s .txt | \
	xargs -I {} bash -c "(diff <(cat test/{}.txt) <(LOG_LEVEL={} npx ts-node src/logger.test.ts 2>&1) && echo '{} level test succeeded') || (echo '{} level test failed' && exit 1)";
