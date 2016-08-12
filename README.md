# DorryWeb

DorryWeb is a website of Matchbox company.
## Usage

## develop branch
### 1. download Matchboxweb project
 ```
 git clone -b develop git@github.com:MatchboxDorry/MatchboxWeb.git
 ```
### 2. Entering the folder of MatchboxWeb
 ```
 cd MatchboxWeb
 ```
### 3. Install the npm to config the developing environment
 ```  
 npm install
 ``` 
### 4. run the grunt file
```
 grunt 
```
After you input the grunt ,there will be a folder named product, including index.html, joinus.html and assets folder. If you do development, you can modify the jade files in the src folder, then you can run the gruntfile.js, this file will compile the jade files int the src folder to create a product folder including the html pages and assets.

### 5. commit the changes
If you changed the css and images... , you need to add and commit.
```
 git add <the things you modified>
 git commit -m "<description of your changes>"
```
After you modify the changes, you need to commit the product to the develop branch.
```
 git add pruduct
 git commit -m "add product"
```
## test branch
### 6. Checkout test branch from origin
```
 git checkout -b test origin/test 
```
### 7. run the test.sh
```
 ./test.sh 
```
Run the test.sh, you will get html pages and assets ,then you can open the chrom browser and input 
```
 localhost:8000 
```
### 8. commit the modified product to the test branch
```
 git add assets *.html
 git commit -m "<add assets *.html>"
```

## gh-pages branch

### 9. checkout to gh-pages
```
 git checkout gh-pages
 git checkout test assets *.html 
```
### 10. commit changes to origin gh-pages
```
 git add <the things you modified>
 git commit -m "<description of your changes>"
```
### 11. push changes to origin gh-pages
```
git push origin gh-pages
```
### 12. checkout to the test branch, and delete the assets and *.html directory
```
 git checkout test 
 git rm -r assets *.html
 git commit -m "delete the assets *.html"
```
### 13. push to the origin from test
```
 git push origin test 
```
### 14. checkout to the develop branch, and delete the product directory
```
 git checkout develop 
 git rm -r product
 git commit -m "delete the product folder"
```
### 15. push to the origin develop branch
```
 git push origin develop
```

