<?php
    $content = "";
    foreach ($POST as $key => $value) {
        if ($value){
            $content .= "$key: $value\n"
        }
    }
    if(trim($content)){
        $content = "Message from Site:\n".$content;
        // Your bot's token that got from @BotFather
        $apiToken = "6498580693:AAHqpfRwir0xR1QMwbT1CAz-e8OUmGvEDsQ";
        $data = [
            // Tne user's (that you want to send a message) telegram id
            'chat_id' =>"@KenformGetMessages",
            "text" =>$content,
            "parse_mode" => "HTML",
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    }


?>