package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Api("API文档")
@Controller
public class SwaggerController {

    @ApiOperation("SwaggerUI文档")
    @GetMapping("/api")
    public String index() {
        return "redirect:swagger-ui.html";
    }
}
