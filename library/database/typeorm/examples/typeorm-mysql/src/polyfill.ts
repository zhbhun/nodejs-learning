import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';

initializeTransactionalContext() // Initialize cls-hooked
patchTypeORMRepositoryWithBaseRepository() // patch Repository with BaseRepository.
