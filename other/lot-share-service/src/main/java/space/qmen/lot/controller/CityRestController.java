package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import space.qmen.lot.entity.City;
import space.qmen.lot.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */


@Api("城市")
@RequestMapping("/api/city")
@RestController
public class CityRestController {

    @Autowired
    private CityService cityService;

    @ApiOperation("根据id获取城市")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public City findOneCity(@PathVariable("id") Long id) {
        return cityService.findCityById(id);
    }

    @ApiOperation("获取所有城市")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<City> findAllCity() {
        return cityService.findAllCity();
    }

    @ApiOperation("新增城市")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void createCity(@RequestBody City city) {
        cityService.saveCity(city);
    }

    @ApiOperation("修改城市")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void modifyCity(@RequestBody City city) {
        cityService.updateCity(city);
    }

    @ApiOperation("根据id删除城市")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void modifyCity(@PathVariable("id") Long id) {
        cityService.deleteCity(id);
    }
}