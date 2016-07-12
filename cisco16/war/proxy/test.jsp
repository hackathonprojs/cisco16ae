<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.util.logging.*" %>
<%@ page import="org.json.*" %>
<%@ page import="aedalert.net.*" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
	String result = RetrieveData.callGet("http://45.55.24.32:8000/API/search?userName=DylanIphone1");
	response.setContentType("application/json");

%>
<%=result%>