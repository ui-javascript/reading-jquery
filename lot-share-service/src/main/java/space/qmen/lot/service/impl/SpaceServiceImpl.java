package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.SpaceDao;
import space.qmen.lot.dto.SpaceDetailsDTO;
import space.qmen.lot.entity.Space;
import space.qmen.lot.entity.param.WeekRule;
import space.qmen.lot.service.ISpaceService;

import java.util.List;

@Service
public class SpaceServiceImpl implements ISpaceService {
    @Autowired
    private SpaceDao spaceDao;

    @Override
    public List<Space> listSpace(){
        return spaceDao.listSpace();
    }

    @Override
    public Space getSpaceById(Long id) { return spaceDao.getSpaceById(id); }

    @Override
    public Long deleteSpace(Long id) {
        return spaceDao.deleteSpace(id);
    }

    @Override
    public Long saveSpace(Space space) { return spaceDao.saveSpace(space); }

    @Override
    public Long updateSpace(Space space) { return spaceDao.updateSpace(space); }

    @Override
    public List<SpaceDetailsDTO> listSpaceDetailsByOwnerId(Long id){
        return spaceDao.listSpaceDetailsByOwnerId(id);
    }

    @Override
    public Long updateSpaceRule(WeekRule weekRule) { return spaceDao.updateSpaceRule(weekRule); }
}
