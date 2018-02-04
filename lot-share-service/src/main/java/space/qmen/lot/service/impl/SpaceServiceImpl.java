package space.qmen.lot.service.impl;

import space.qmen.lot.dao.SpaceDao;
import space.qmen.lot.domain.Space;
import space.qmen.lot.service.SpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class SpaceServiceImpl implements SpaceService {

    @Autowired
    private SpaceDao spaceDao;

    public List<Space> findAllSpace(){
        return spaceDao.findAllSpace();
    }

    public Space findSpaceById(Long id) {
        return spaceDao.findById(id);
    }

    @Override
    public Long saveSpace(Space space) {
        return spaceDao.saveSpace(space);
    }

    @Override
    public Long updateSpace(Space space) {
        return spaceDao.updateSpace(space);
    }

    @Override
    public Long deleteSpace(Long id) {
        return spaceDao.deleteSpace(id);
    }

}