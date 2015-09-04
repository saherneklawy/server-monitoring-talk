## Motivating the need to monitoring and metrics

- Modern tech stacks are complex
  - JS frameworks
  - Reverse proxy
  - In memory cache (memcache, redis)
  - Server side framework
  - Multiple database connections
- if it moves, track it
- "mind the gap" (from Coda Hale talk)
- Why is this related to DevOps
    - Define DevOps
    - Etsy's point on why developers flexibily adding metrics is needed

## What are the needed compoenents of a monitoring system

- Metric/Event Collection Storage
- Metric Aggregation
- Viewing Metric Context
- Dashboards to group related metrics
- Alerting/Notifications based on a threshold

## Tools for monitoring

- Statsd
- Graphite/graphana
- Nagious
- ELK
- Splunk
- Newrelic
- Google analytics
- Airbrake
- AWS CloudWatch
- The tool hosted on Azure and elasticsearch backed used to track JS erorrs

## ELK

- What is Elasticsearch
- What is Logstash
- What is Kibana

- Flexiblity of logstash i/o and filtering
- Kibana 4 explore mode
- Kibana 4 charts


## Example use cases for user monitoring

- Log catting across several machines
- Click tracking
- Expcetion tracking (both normal and JS)
- Speed
- Tracking A/B tests


## Resources

- Metrics Everywhere talk
- Talk talking about wh nagios is an anchient beast
- Various Etsy talking about monitoring
- Blog post on how to use google analytics events to keep track of exceptions
