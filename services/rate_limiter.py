import redis
import time
from ..config.settings import settings

r = redis.Redis.from_url(settings.REDIS_URL)

def rate_limit(key: str, limit: int, window: int = 60):
    current = r.get(key)
    if current and int(current) >= limit:
        backoff = r.ttl(key) or 1
        time.sleep(backoff)
        return False
    r.incr(key)
    r.expire(key, window)
    return True
