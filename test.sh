# Clear all the files except test.sh
git rm -r assets *.html 
# checkout product from develop branch
git checkout develop product
# git mv all the files and directories from product to current path
git mv product/* ./
# git rm product folder
rm -r product node_modules
# start http server
python -m SimpleHTTPServer
