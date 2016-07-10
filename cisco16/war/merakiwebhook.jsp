<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.util.logging.*" %>
<%@ page import="org.json.*" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
//this jsp is called when receiving sms.
Logger log = Logger.getLogger(this.getServletName());


String result = "";

log.warning("test");

// this 28...94 string is the validator.
// meraki server will first make a get http request to our server.  
// we have to reply with the validator string for this to work.
// after that, meraki server will make post request to send us the 
// data.
String dataToShow = "28499a6707fc14df34b1f10c7ae8193510d7b194";

//reading using reader because the sender does not send it through parameter.
if ("POST".equals(request.getMethod())) {
	StringBuilder buffer = new StringBuilder();
	BufferedReader reader = request.getReader();

	String line;
	while((line = reader.readLine()) != null){
	 buffer.append(line);
	}
	//reqBytes = buffer.toString().getBytes();

	result = buffer.toString();
	if (result.length() > 0) {
		dataToShow = buffer.toString();
	}

}

%>
<%=dataToShow%>