#!/bin/bash
echo "---------------------------------------------"
echo "Preparing merge to git"

echo '
	git add .
	git commit -m ...
	git push
	git checkout master
	git pull
	git merge challenge
	git checkout challenge
'

#### NOTE IF YOU ADD A LINE HERE ADD IT ABOVE JUST FOR BETTER MESSAGING -BJM 3/7/2018

    git add .
	git commit -m "$msg"
	git push
	git checkout master
	git pull
	git merge challenge
	git checkout challenge

echo "---------------------------------------------"
echo "Finished merging challenge to master."
echo "---------------------------------------------"