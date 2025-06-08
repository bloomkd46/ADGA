## 3.6.0-beta.4
* Fixed the env variable name mixup

## 3.6.0-beta.3
* Fixed a bug in the deploy job that caused the package to not be published

## 3.6.0-beta.2
* Added missing job to deploy the code to npm

## 3.6.0-beta.1
* Added support for interacting with the CDCB to access milk records

## 3.5.1
* Restructered the release process

## 3.5.0 
* Added the ability to search for goats by their normalizeId
* Added the ability to search for goats by their name

## 3.4.3 
* Fixed a bug causing requests to hang indefinitely if the credentials are invalid

## 3.4.2 
* fixed login errors if multiple concurrent requests

## 3.4.1 
* Tweaked Axios to force http (necessary to use cookies field in electron)

## 3.4.0 
* Added getProgeny() function

## 3.3.0 
* Added getLinearAppraisal() function
* Added getShows() function

## 3.2.1 
* Fixed getTransferHistory() to match new ADGA API

## 3.2.0 
* Added getTransferHistory() function

## 3.1.1 
* Fixed missing non-critical line

## 3.1.0 
* Numerous tweaks and improvements

## 3.0.1 
* Fixed typo in getCurrentLoginInfo()

## 3.0.0 
* Major API improvements
## Breaking Changes:
* Use constructor instead of static init

## 2.1.1 
* Fixed getGoats() To Handle Empty Arrays

## 2.1.0 
* Added getAwards() function

## 2.0.1 
* Fixed typo in OwnedGoats interface

## 2.0.0 
Breaking Change:
replace new ADGA(); with ADGA.init(username, password)

## 1.0.0 
* Initial Release
