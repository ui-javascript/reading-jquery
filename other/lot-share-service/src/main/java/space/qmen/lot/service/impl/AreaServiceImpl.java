package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.AreaDao;
import space.qmen.lot.entity.Area;
import space.qmen.lot.service.AreaService;

import java.util.List;

@Service
public class AreaServiceImpl implements AreaService {
    @Autowired
    private AreaDao areaDao;

    @Override
    public List<Area> listArea(){
        return areaDao.listArea();
    }

    @Override
    public Area getAreaById(Long id) {
        return areaDao.getAreaById(id);
    }

    @Override
    public Long saveArea(Area area) {
        return areaDao.saveArea(area);
    }

    @Override
    public Long updateArea(Area area) {
        return areaDao.updateArea(area);
    }

    @Override
    public Long deleteArea(Long id) {
        return areaDao.deleteArea(id);
    }
}
