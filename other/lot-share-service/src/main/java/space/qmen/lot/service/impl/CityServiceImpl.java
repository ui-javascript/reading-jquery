package space.qmen.lot.service.impl;

import space.qmen.lot.dao.CityDao;
import space.qmen.lot.dto.city.CityPureDTO;
import space.qmen.lot.entity.City;
import space.qmen.lot.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {


    @Autowired
    private CityDao cityDao;

    @Override
    public List<CityPureDTO> listCity(){
        return cityDao.listCity();
    }

    @Override
    public CityPureDTO getCityById(Long id) {
        return cityDao.getCityById(id);
    }

    @Override
    public Long saveCity(City city) {
        return cityDao.saveCity(city);
    }

    @Override
    public Long updateCity(City city) {
        return cityDao.updateCity(city);
    }

    @Override
    public Long deleteCity(Long id) {
        return cityDao.deleteCity(id);
    }

}