package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Zone;
import space.qmen.lot.service.IZoneService;

import java.util.List;

@Api(value="停车区", tags={"停车区"})
@RequestMapping("/api/v1/zone")
@RestController
public class ZoneRestController {
    @Autowired
    private IZoneService zoneSrervice;

    @ApiOperation("根据id获取停车区")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Zone getZoneById(@PathVariable("id") Long id) {
        return zoneSrervice.getZoneById(id);
    }

    @ApiOperation("获取所有停车区")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Zone> listZone() { return zoneSrervice.listZone(); }

    @ApiOperation("新增停车区")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveZone(@RequestBody Zone zone) {
        zoneSrervice.saveZone(zone);
    }

    @ApiOperation("修改停车区信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateZone(@RequestBody Zone zone) {  zoneSrervice.updateZone(zone); }

    @ApiOperation("根据id删除停车区")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteZone(@PathVariable("id") Long id) {
        zoneSrervice.deleteZone(id);
    }
}
