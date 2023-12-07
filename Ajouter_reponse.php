<?php
include('connection.php');
        $userId = $_POST['selectedId']; 
        $questionId = 2; 
        
        
        $responseDescription = $_POST['description'];
        
        
        $sql = "INSERT INTO reponse (reponse, user_id_reponse, id_qst,archife) VALUES ('$responseDescription', $userId, $questionId,1)";
        
        if ($conn->query($sql) === TRUE) {
            echo "Response added successfully!";
            header('Location: dashboardUser.php');
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
 ?>       