// This script handles the functionality of the "About" section of the webpage.

// It includes event listeners for buttons to download a CV and academic papers.
document.getElementById("downloadBtn").addEventListener("click", function() 
{
    const downloadUrl = document.createElement("a");
    downloadUrl.href = "downloads/Sospeter Owino .pdf";
    downloadUrl.download = "Sospeter_Owino_CV .pdf";
    downloadUrl.click();
    alert("CV is downloading...");
});

// This event listener is for the "Academics" button, which downloads academic papers.
document.getElementById("academicsBtn").addEventListener("click", function() 
{
    const link = document.createElement("a");
    link.href = "downloads/academic.pdf";
    link.download = "Sospeter_Owino_academic_papers .pdf";
    link.click();
    alert("Downloading...");
});