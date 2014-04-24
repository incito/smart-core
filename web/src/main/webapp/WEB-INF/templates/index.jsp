<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html data-ng-app="logistics">
<head>
	<base href="${path}">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>logistics - 物流管理</title>
	<jsp:include page="common/common.jsp" />
	<script src="${path}/js/index.js"></script>
</head>

<body>
		<jsp:include page="common/header.jsp" />
		<div class="container">
			 <br>
			<h1>${msg}</h1>
			
		</div>
		<jsp:include page="common/footer.jsp" />
</body>
</html>
