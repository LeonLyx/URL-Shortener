CREATE DATABASE url_db;
USE url_db;

CREATE TABLE url_tab(
    shorten_url CHAR(3) NOT NULL,
    original_url VARCHAR(2048) NULL,
    issue_datetime TIMESTAMP NULL,

    PRIMARY KEY (shorten_url)
);

CREATE INDEX issuedatetime_shortenurl_idx ON url_tab (issue_datetime, shorten_url);

