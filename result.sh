# run Gruntfile to update the html pages in product folder
grunt
# checkout the status
git status
# add the changed files to the develop branch
read -p "Enter files name you need to add :" name1 name2 name3 name4 name5
git add $name1 $name2 $name3 $name4 $name5
# commit the add files to the develop branch
read -p "Enter files name you need to add :"
git commit -m "$message"
