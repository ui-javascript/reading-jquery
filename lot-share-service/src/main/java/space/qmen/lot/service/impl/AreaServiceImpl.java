package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.AreaDao;
import space.qmen.lot.model.dto.AreaSimpleDTO;
import space.qmen.lot.model.entity.Area;
import space.qmen.lot.service.IAreaService;

import java.util.List;

@Service
public class AreaServiceImpl implements IAreaService {
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
    public Long deleteArea(Long id) {
        return areaDao.deleteArea(id);
    }

    @Override
    public Long saveArea(AreaSimpleDTO area) {
        return areaDao.saveArea(area);
    }

    @Override
    public Long updateArea(AreaSimpleDTO area) {
        return areaDao.updateArea(area);
    }
}
