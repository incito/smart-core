<%@ page language="java" pageEncoding="UTF-8"%>
<%
  String path = request.getContextPath();
  request.setAttribute("path", path);
%>
<!-- 公共资源 引用-->
<script>var _path = '${path}';</script>
<script src="${path}/lib/jquery.min.js"></script>
<script src="${path}/lib/PIE-1.0.0/PIE.js"></script>
<script src="${path}/lib/html5shiv.js"></script>

<link rel="stylesheet" href="${path}/lib/bootstrap/css/bootstrap.css" />
<link rel="stylesheet" href="${path}/lib/bootstrap-datetimepicker/bootstrap-datetimepicker.css" />
<link rel="stylesheet" href="${path}/css/index.css" />
<link rel="stylesheet" href="${path}/lib/font-awesome/css/font-awesome.css" />
<link rel="stylesheet" href="${path}/lib/rateit/rateit.css" />

<script src="${path}/lib/bootstrap/js/bootstrap.js"></script>
<script src="${path}/lib/forIE8.js"></script>
 