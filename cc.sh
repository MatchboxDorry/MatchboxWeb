# checkout the status
git status
# git add the changed files to the develop branch
read -p "Enter files name you need to add :" name1 name2 name3 name4 name5
git add $name1 $name2 $name3 $name4 $name5
# git commit the add files to the develop branch
read -p "Enter commit message:" message
git commit -m "$message"

# git change branch to test
git checkout gh-pages
# checkout .html and assets folder from test branch
git checkout test *.html
git checkout test assets
# checkout the status
git status
# git add the changed files to the gh-pages branch
read -p "Enter files name you need to add :" name1 name2 name3 name4 name5
git add $name1 $name2 $name3 $name4 $name5
# git commit the add files to the gh-pages branch
read -p "Enter commit message:" message
git commit -m "$message"
# push the newer changes to origin gh-pages
git push origin gh-pages

