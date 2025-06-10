## 3.6.2-beta.2
* Fixed a bug preventing the CDCB functions from being able to import

## 3.6.2-beta.1
* Singificantly imporved the types for the return values of the CDCB functions

## 3.6.1-beta.3
* EXpanded the types allowed for the search query to include `number` in addition to `string` 

## 3.6.1-beta.2
* Fixed a bug in the CDCB `getLactationsTestDate()` url that caused the search to fail

## 3.6.1-beta.1
* Updated valid search options for the CDCB

## 3.6.0-beta.7
* Updated Github Token permissons to allow publishing to npm with provenance

## 3.6.0-beta.6
* Switched back to npm for publishing and followed https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-nodejs-packages for configuring the token

## 3.6.0-beta.5
* switched to yarn with `--otp` flag to publish to npm

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
