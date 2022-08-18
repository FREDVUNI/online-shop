<h1>THISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!</h1>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AMAD</title>
</head>
<body>
    <?php foreach($category as $key=>$row): ?>
    <ul>
        <li>Category: <?php echo $row["category"];?></li>
        <li>Slug: <?php echo $row["slug"];?></li>
    
    </ul>
    <?php endforeach; ?>
</body>
</html>