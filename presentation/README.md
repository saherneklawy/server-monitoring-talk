## Motivating the need to monitoring and metrics

- Modern tech stacks are complex
  - JS frameworks
  - Reverse proxy
  - In memory cache (memcache, redis)
  - Server side framework
  - Multiple database connections
- "mind the gap" (from Coda Hale talk)
- if it moves, track it
    - How your servers/apps are behaving
    - How your users are behaving
    - metric categories:
      - Counters
      - Gauges
      - Histograms & Timers
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
- Track:JS

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

- [Metrics Everywhere talk](https://www.youtube.com/watch?v=czes-oa0yik)
- [Talk talking about wh nagios is an anchient beast](https://www.youtube.com/watch?v=Q9BagdHGopg)
- Various Etsy talking about monitoring:
  - https://www.youtube.com/watch?v=ZZ3-XjoTQ14&index=1&list=PL_Hu3Hkz4n-9v9S4tu4w-5lHG7P_XiDSu
  - https://www.youtube.com/watch?v=3nF426i0cBc
  - https://www.youtube.com/watch?v=dD7ywdG8IEQ
- [Blog post on how to use google analytics events to keep track of exceptions](analytics.blogspot.com/2013/02/5-things-you-should-be-doing-with.html)
