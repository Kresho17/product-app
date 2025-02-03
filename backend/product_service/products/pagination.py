from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

class CustomLimitOffsetPagination(LimitOffsetPagination):
    page_size_query_param = 'limit'
    offset_query_param = 'skip'
    limit_query_param = 'limit'
    max_limit = 10
    default_limit = 10
