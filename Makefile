install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node src/games/brain-even.js

brain-calc: 
	node src/games/brain-calc.js

brain-gcd:
	node src/games/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .