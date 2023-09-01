.PHONY: install lint eslint prettier format built test

install:
	npm ci

eslint: install
	npx eslint . --ext .ts

prettier: install
	npx prettier --check .

lint: eslint prettier

format: install
	npx prettier --write .

build: install
	npx ts-node esbuild.ts

test:
	find test/ -name "*.txt" | \
	sort | \
	xargs -L 1 basename -s .txt | \
	xargs -I {} bash -c "(diff <(cat test/{}.txt) <(LOG_LEVEL={} npx ts-node src/logger.test.ts 2>&1) && echo '{} level test succeeded') || (echo '{} level test failed' && exit 1)";
