package space.qmen.lot.controller.common;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import space.qmen.lot.dto.city.CityPureDTO;
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
@RequestMapping("/tmp/api/v1/city")
@RestController
public class CityRestController {

    @Autowired
    private CityService cityService;

    @ApiOperation("根据id获取城市")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public CityPureDTO getCityById(@PathVariable("id") Long id) {
        return cityService.getCityById(id);
    }

    @ApiOperation("获取所有城市")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<CityPureDTO> listCity() {
        return cityService.listCity();
    }

    @ApiOperation("新增城市")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveCity(@RequestBody City city) {
        cityService.saveCity(city);
    }

    @ApiOperation("修改城市")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateCity(@RequestBody City city) {
        cityService.updateCity(city);
    }

    @ApiOperation("根据id删除城市")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void updateCity(@PathVariable("id") Long id) {
        cityService.deleteCity(id);
    }
}