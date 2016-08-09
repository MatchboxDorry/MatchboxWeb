# DorryWeb

DorryWeb is a website of Matchbox company.
## Usage

## develop branch
### 1. download Matchboxweb project
 ```
 git clone git@github.com:MatchboxDorry/MatchboxWeb.git
 ```
### 2. Entering the folder of MatchboxWeb
 ```
 cd /MatchboxWeb
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
### 5. run the cc.sh
```
 ./cc.sh 
```
After you modify the source code , you can run the cc.sh file to add and commit the changes to git and to the remote .At the same time , you will automatically checkout to the test branch.

## test branch
### 6. run the test.sh
```
 ./test.sh 
```
Run the test.sh, you will get html pages and assets ,then you can open the chrom browser and input 
```
 localhost:8000 
```
you can see the webside you develop and the changes you modified.
### 7. run the cc.sh
After you visit the webside and ensure no problem, you can run 
```
 ./cctest.sh 
```
to add and commit the changes to git and remote and checkout to the gh-pages branch.

## gh-pages branch
### 8. commit changes to origin gh-pages
In the gh-pages, there is a push.sh, you can run   
```
 ./push.sh 
```
to add and commit the changes to origin gh-pages branch.

