package space.qmen.lot.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.lot.entity.Vehicle;
import space.qmen.lot.service.IVehicleService;

import java.util.List;

@Api(value="车辆", tags={"车辆"})
@RequestMapping("/api/v1/vehicle")
@RestController
public class VehicleRestController {
    @Autowired
    private IVehicleService vehicleService;

    @ApiOperation("根据id获取车辆")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Vehicle getVehicleById(@PathVariable("id") Long id) {
        return vehicleService.getVehicleById(id);
    }

    @ApiOperation("获取所有车辆")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Vehicle> listVehicle() { return vehicleService.listVehicle(); }

    @ApiOperation("新增车辆")
    @RequestMapping(value = "", method = RequestMethod.POST)
    public void saveVehicle(@RequestBody Vehicle vehicle) {
        vehicleService.saveVehicle(vehicle);
    }

    @ApiOperation("修改车辆信息")
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public void updateVehicle(@RequestBody Vehicle vehicle) {  vehicleService.updateVehicle(vehicle);
    }

    @ApiOperation("根据id删除车辆")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteVehicle(@PathVariable("id") Long id) {
        vehicleService.deleteVehicle(id);
    }
}
