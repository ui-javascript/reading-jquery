package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.dto.AreaSimpleDTO;
import space.qmen.lot.entity.Area;
import space.qmen.lot.service.IAreaService;

import java.util.List;

@Api(value="省市区", tags={"省市区"})
@RequestMapping("/api/v1/area")
@RestController
public class AreaRestController {

    @Autowired
    private IAreaService areaService;

    @ApiOperation("根据id获取地区")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Area getAreaById(@PathVariable("id") Long id) {
        return areaService.getAreaById(id);
    }

    @ApiOperation("获取所有地区")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Area> listCity() {
        return areaService.listArea();
    }

    @ApiOperation("新增地区")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveArea(@RequestBody AreaSimpleDTO area) {
        areaService.saveArea(area);
    }

    @ApiOperation("修改地区信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateArea(@RequestBody AreaSimpleDTO area) {  areaService.updateArea(area);
    }

    @ApiOperation("根据id删除地区")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteArea(@PathVariable("id") Long id) {
        areaService.deleteArea(id);
    }
}