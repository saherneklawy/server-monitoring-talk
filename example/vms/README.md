### Docker container config

- `docker-compose.yml`: description of stack containers

### Elasticsearch config

- `elasticsearch.yml`: this sets the cluster name and replication. For development replication is turned off
- *** very important file** `logstas-es.template`: this specifies the default schema in elasticsearch so that the fields would have the correct type in kibana

### Logstash config

- `logstash-es.template`: contains the logstash config for nginx logs
- `test_data.logstash.conf`: contains the logstash config for the test data. To run this, run bash inside the logstash container using `docker-compose run logstash /bin/bash` then run the `load_test_data.bash` script present inside the container under `/config-dir`


### nginx config:

- `node-app.nginx.config` nginx configuration useful for node apps in general
