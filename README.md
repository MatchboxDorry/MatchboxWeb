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

### 5. commit the product
```
 git add <the things you modified>
 git commit -m "<description of your changes>"
```
After you modify the changes, you need to commit the product to the develop branch.


## test branch


### 6. Checkout test branch from origin
```
 git checkout -b test origin/test 
```
checkout the test branch from the remote
### 7. run the test.sh
```
 ./test.sh 
```
Run the test.sh, you will get html pages and assets ,then you can open the chrom browser and input 
```
 localhost:8000 
```
you can see the webside you develop and the changes you modified. If there is no problem, you need to commit.
## gh-pages branch
### 8. commit the modified product to the test
```
 git add <the thing changed> 
 git commit -m "<description of changes>"
```
change the branch from test to the gh-pages
### 9. checkout the modified product to the gh-pages and push to the romote
```
 git checkout gh-pages
 git checkout test assets *.html 

```
change the branch from test to the gh-pages
### 10. commit changes to origin gh-pages
```
 git add <the things you modified>
 git commit -m "<description of your changes>"
```
After you ensure the changes, you need to push to the remote.
### 11. push changes to origin gh-pages
```
git push origin gh-pages
```
