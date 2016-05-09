#!c:/Python27/python
# Import modules for CGI handling 
import cgi, cgitb 
import httplib

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title> Second CGI Program</title>"
print "</head>"
print "<body>"
print "<h2>Server</h2>" 


httpServ = httplib.HTTPConnection("127.0.0.1", 81)
httpServ.connect()

httpServ.request('GET', "http://api.pv8.myleasestar.com/v2/apartment-search?coid=11204")

response = httpServ.getresponse()

if response.status == httplib.OK:
    print "Output from HTML request"
    print response.read()

httpServ.request('GET', '/cgi_form.cgi?name=Brad&quote=Testing.')

response = httpServ.getresponse()
if response.status == httplib.OK:
    print "Output from CGI request"
    print "<p>" + response.read() + "</p>"

httpServ.close()

print "</html>"