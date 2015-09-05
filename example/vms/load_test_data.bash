#!/bin/bash
curl https://gist.githubusercontent.com/chrtze/51fa6bb4025ba9c7c2b3/raw/9ca9e8bc33fd1b81f44b78f830a8e33d0dbf7646/data.csv  > /logs/data.csv
logstash -f /config-dir/test_data.logstash.conf
