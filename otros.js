$.ajax({        
    type : 'POST',
    url : "https://iid.googleapis.com/iid/info/etNJ1Po5fTg:APA91bF3mnjKfugRVhuQMGNRAO4pH3GMahTktXJz2nu9fKGFSspCCAYe7iOM_PfiYpDj_xiSAiUfbx2co3PUjuErLGmqLcINe2Q3mXSnoXcgVja3FODuwDCQlFCk10oxqrDAVacsNXft?details=true",
    headers : { Authorization: "key=AIzaSyCUpg8GjUxs56rQyDCO_yEu46Vmbxfpapg" },
    contentType : 'application/json',
    dataType: 'json',
    success : function(response) {
        alert("hi");
        console.log(response);
    },
    error : function(xhr, status, error) {
        console.log(xhr.error);                   
    }
});