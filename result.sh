# run Gruntfile to update the html pages in product folder
grunt
# checkout the status
git status
# git add the changed files to the develop branch
read -p "Enter files name you need to add :" name1 name2 name3 name4 name5
git add $name1 $name2 $name3 $name4 $name5
# git commit the add files to the develop branch
read -p "Enter commit message:" message
git commit -m "$message"
# git change branch to test
git checkout test
