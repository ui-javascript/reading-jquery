package space.qmen.lot.service;

import space.qmen.lot.model.entity.Vehicle;

import java.util.List;

public interface IVehicleService {
    List<Vehicle> listVehicle();
    Vehicle getVehicleById(Long id);
    Long deleteVehicle(Long id);

    Long saveVehicle(Vehicle vehicle);
    Long updateVehicle(Vehicle vehicle);
}
