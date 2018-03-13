package space.qmen.lot.service;

import space.qmen.lot.domain.Owner;

import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface OwnerService {

    List<Owner> findAllOwner();

    Owner findOwnerById(Long id);
    Long saveOwner(Owner owner);
    Long updateOwner(Owner owner);
    Long deleteOwner(Long id);
}
