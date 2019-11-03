package com.example.demo.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TodoController {

    @GetMapping("/")
    public String index(Model model){
        return "index";
    }

    @GetMapping("/helloWorld")
    @ResponseBody
    public ResponseEntity<String> helloWorld(){
        return ResponseEntity.ok("hello world");
    }

}
