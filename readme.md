## The Tizzy

##### The Tizzy is a viral news site similar to ViralNova.com -or- UpWorthy.com

- [Production Environment](http://www.thetizzy.com)
- [Testing Environment](http://the-tizzy.testing.cogolo.net)
- (GDOC) [Project Discussion](https://docs.google.com/a/cogolabs.com/document/d/15Fj08UvlVkZTwNnUq_1rHqDw6q5YvPtXCisuF_NduSA/)

## /wp-admin/ account

- **username:** admin
- **password:** cogo

## Database Information (testing)

- **host:** squeebles-wp-db.cogolo.net
- **name:** wordpress
- **user:** squeebles
- **pass:** [ASK MIRA](mailto:mwilczek@cogolabs.com)
- **charset:** utf8
- **table prefix:** wp_

## Be Cautious!

- **DO NOT INSTALL** any `plugins` within your localhost environment;  This may cause a great deal of issues and the localhost environment may no longer be viewable
- In a situation where you would like to test a given `plugin`, please leverage the testing environment
- You may experience a blank page, with no errors;  Log into /wp-admin/ and change your theme to the **'twentytwelve'** theme
- Having issues with PHP?  Be sure to leverage the `define('WP_DEBUG', true);` within your **local** /wp-config.php file
