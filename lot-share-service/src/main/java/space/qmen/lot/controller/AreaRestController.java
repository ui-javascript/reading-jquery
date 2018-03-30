package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.model.dto.AreaSimpleDTO;
import space.qmen.lot.model.entity.Area;
import space.qmen.lot.service.IAreaService;
import space.qmen.lot.utils.ResultUtil;

import java.util.List;

@Api(value="省市区", tags={"省市区"})
@RequestMapping("/api/v1/area")
@RestController
public class AreaRestController {

    @Autowired
    private IAreaService areaService;

    @ApiOperation("根据id获取地区")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Object getAreaById(@PathVariable("id") Long id) {
        Area area = areaService.getAreaById(id);
        return ResultUtil.getResultWithSuccess(area);
    }

    @ApiOperation("获取所有地区")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public Object listCity() {
        List<Area> list = areaService.listArea();
        return ResultUtil.getResultWithSuccess(list);
    }

    @ApiOperation("新增地区")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Object saveArea(@RequestBody AreaSimpleDTO area) {
        areaService.saveArea(area);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("修改地区信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Object updateArea(@RequestBody AreaSimpleDTO area) {
        areaService.updateArea(area);
        return ResultUtil.getResultWithSuccess();
    }

    @ApiOperation("根据id删除地区")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Object deleteArea(@PathVariable("id") Long id) {
        areaService.deleteArea(id);
        return ResultUtil.getResultWithSuccess();
    }
}