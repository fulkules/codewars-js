#!/bin/bash
echo "---------------------------------------------"
echo "Preparing merge to git"

echo '
	git add .
	git commit -m '...'
	git push
	git checkout master
	git pull
	git merge challenge
	git checkout challenge
'

#### NOTE IF YOU ADD A LINE HERE ADD IT ABOVE JUST FOR BETTER MESSAGING

    git add .
	git commit -m 'kata challenge'
	git push
	git checkout master
	git pull
	git merge challenge
	git checkout challenge

echo "---------------------------------------------"
echo "Finished merging challenge to master."
echo "---------------------------------------------"