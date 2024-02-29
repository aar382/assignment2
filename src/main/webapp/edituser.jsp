<%@page import="dao.UserDao"%>  
<jsp:useBean id="u" class="model.User"></jsp:useBean>  
<jsp:setProperty property="*" name="u"/>  
<%  
int i=UserDao.update(u);  
response.sendRedirect("viewusers.jsp");  
%>  