package space.qmen.lot.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import space.qmen.lot.dao.CommunityDao;
import space.qmen.lot.entity.Community;
import space.qmen.lot.service.ICommunityService;

import java.util.List;

@Service
public class CommunityService implements ICommunityService {
    @Autowired
    private CommunityDao communityDao;

    @Override
    public List<Community> listCommunity(){
        return communityDao.listCommunity();
    }

    @Override
    public Community getCommunityById(Long id) { return communityDao.getCommunityById(id); }

    @Override
    public Long deleteCommunity(Long id) {
        return communityDao.deleteCommunity(id);
    }

    @Override
    public Long saveCommunity(Community community) { return communityDao.saveCommunity(community); }

    @Override
    public Long updateCommunity(Community community) { return communityDao.updateCommunity(community); }
}
