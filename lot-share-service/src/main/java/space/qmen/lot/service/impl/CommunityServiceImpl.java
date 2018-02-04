package space.qmen.lot.service.impl;

import space.qmen.lot.dao.CommunityDao;
import space.qmen.lot.domain.Community;
import space.qmen.lot.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 城市业务逻辑实现类
 *
 * Created by bysocket on 07/02/2017.
 */
@Service
public class CommunityServiceImpl implements CommunityService {

    @Autowired
    private CommunityDao communityDao;

    public List<Community> findAllCommunity(){
        return communityDao.findAllCommunity();
    }

    public Community findCommunityById(Long id) {
        return communityDao.findById(id);
    }

    @Override
    public Long saveCommunity(Community community) {
        return communityDao.saveCommunity(community);
    }

    @Override
    public Long updateCommunity(Community community) {
        return communityDao.updateCommunity(community);
    }

    @Override
    public Long deleteCommunity(Long id) {
        return communityDao.deleteCommunity(id);
    }

}