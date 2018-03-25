package space.qmen.lot.controller.rbac;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.rbac.User;
import space.qmen.lot.service.IUserService;

import java.util.List;


@Api(value="用户", tags={"用户"})
@RequestMapping("/api/v1/user")
@RestController
public class UserRestController {
    @Autowired
    private IUserService userService;

    @ApiOperation("根据id获取用户")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    @ApiOperation("获取所有用户")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<User> listUser() { return userService.listUser(); }

    @ApiOperation("新增用户")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @ApiOperation("修改用户信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateUser(@RequestBody User user) {  userService.updateUser(user);
    }

    @ApiOperation("根据id删除用户")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
}
