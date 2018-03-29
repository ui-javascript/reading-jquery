package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Space;
import space.qmen.lot.service.ISpaceService;
import space.qmen.lot.utils.ResultUtil;

import java.util.List;

@Api(value="停车位", tags={"停车位"})
@RequestMapping("/api/v1/space")
@RestController
public class SpaceRestController {
    @Autowired
    private ISpaceService spaceService;

    @ApiOperation("根据id获取车位")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getSpaceById(@PathVariable("id") Long id) {
        return ResultUtil.getResultWithSuccess(spaceService.getSpaceById(id));
    }

    @ApiOperation("获取所有车位")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listSpace() {
        return ResultUtil.getResultWithSuccess(spaceService.listSpace());
    }

    @ApiOperation("新增车位")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveSpace(@RequestBody Space space) {
        spaceService.saveSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改车位信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateSpace(@RequestBody Space space) {
        spaceService.updateSpace(space);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("根据id删除车位")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deleteSpace(@PathVariable("id") Long id) {
        spaceService.deleteSpace(id);
        return ResultUtil.getResultWithSuccess();
    }
}
